<template>
  <div class="offline">
      <div class="head">
          <div class="logo"></div>
      </div>
      <div class="content">
        <div class="text">
          <div class="title">Envoy is not running</div>
          <p>MESG UI needs to make gRPC calls to Core. You need to run Envoy proxy to make it possible using gRPC APIs in the Web enverionment.</p>
          <p>You can install Envoy that is configured for MESG by running the following command:</p>
        </div>
        <div class="cont">
          <div id="term" class="term term-ready">
            <input class="term-input-hide" />
            <div class="term-bar">
              <div class="term-winctrl">
                <span class="term-btn close"></span>
                <span class="term-btn minimise"></span>
                <span class="term-btn maximise"></span>
              </div>
              <span class="term-title">Terminal</span>
              <span class="term-bar-spacer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></span>
            </div>
            <div class="term-cont">
              <div class="term-line">
                <span class="term-prompt">$ bash <(curl -fsSL https://mesg.services/install-envoy)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style scoped>
.offline {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.head {
  width: 100%;
  background-color: #251440;
}
.head .logo {
  background: url(../assets/white_logo.png);
  background-repeat: no-repeat;
  background-size: 60px;
  width: 60px;
  height: 60px;
  margin: 10px auto;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content .text {
  color: #111;
  align-self: center;
  margin-bottom: 40px;
  text-align: center;
}
.content .text .title {
  font-weight: 300;
  font-size: 40px;
  margin-bottom: 20px;
}
.content .text p {
  font-weight: 300;
  font-size: 14px;
  margin: 5px;
}

/* https://codepen.io/Onfe/pen/zmvmRJ */
#term {
  width: 35rem;
  background: #111;
  border: 1px solid #252525;
  border-radius: 0.5rem;
  box-shadow: 0 0 4rem rgba(0, 0, 0, 0.2);
}

.term-bar {
  height: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #252525;
  justify-content: space-between;
}

.term-winctrl {
  padding: 0.5rem;
}

.term .term-btn {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.5rem;
  display: inline-block;
  margin: 0.1rem;
}
.term .term-btn.close {
  background-color: #ff3b30;
}
.term .term-btn.minimise {
  background-color: #ffcc00;
}
.term .term-btn.maximise {
  background-color: #28cd41;
}

.term-title {
  font-size: 0.85rem;
  color: #ddd;
  margin: auto 0;
}

.term-bar-spacer {
  display: inline-block;
  width: 4.5rem;
  /* this is nasty pls fix */
  height: 2rem;
  padding: 0.5rem;
  text-align: right;
  margin: 0;
}
.term-bar-spacer svg {
  width: 1rem;
  height: 1rem;
  fill: #666;
}

.term-cont {
  color: #fff;
  padding: 0.5rem;
}

.term-cmd {
  background: none;
  margin: 0;
  border: 0;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
}

.term-caret {
  display: inline-block;
  color: #fff;
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
}
.term-caret.blink {
  color: transparent;
}

.term-input-hide {
  opacity: 0;
  background: none;
  border: 0;
  color: transparent;
  position: absolute;
}
.term-prompt {
  font-size: 13px;
}
</style>	
