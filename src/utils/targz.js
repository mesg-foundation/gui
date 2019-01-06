var tar = require('tar-stream')
var pako = require('pako');

class Targz {
  constructor(onData, onEnd){
    // onData called with each Uint8Array chunk of a tar.gz.
    this.onData = onData || function(chunk) {}

    // onEnd called when there are no more chunks.
    this.onEnd = onEnd || function() {}

    // queue holds the files that needs to be proceed.
    this.queue = []
    this.next = 0;
    this.processing = false;

    this.shouldFinish = false;

    this.tar = tar.pack()
    this.gzip = new pako.Deflate({gzip: true})
    
    this.tar.on('data', (data) => { this.gzip.push(data, false) })
    this.tar.on('end', () => { this.gzip.push(new Uint8Array, true) })
    this.gzip.onData = ((data) => { this.onData(data)  })
    this.gzip.onEnd = (() => { this.onEnd() })
  }

  add(file) {
    this.queue.push(file)
    this.processQueue()
  }

  processQueue(){
    if(this.processing) return
    if(this.next == this.queue.length) {
      if(this.shouldFinish) this.tar.finalize()
      return
    }

    this.processing = true
    var index = this.next
    this.next++

    var file = this.queue[index]

    var reader = new FileReader();
    var that = this
    reader.onload = function() {
      var array = new Uint8Array(this.result)
      var entry = that.tar.entry({ name: file.webkitRelativePath, size: array.length }, (err) => {
        that.processing = false
        that.processQueue()
      })
      entry.write(array)
      entry.end()
    }
    reader.readAsArrayBuffer(file);
  }

  finish(){
    this.shouldFinish = true
    this.processQueue()
  }
}

export default Targz