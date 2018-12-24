
import { ListServicesRequest, DeployServiceRequest } from '../proto/api_pb.js'
require('../proto/api_pb_service.js')
var coreClient = new exports.CoreClient('http://localhost:50053');

export default {
  state: {
    services: [],
    marketplace: {
      services: [
        { name: "service-ethereum", by: "mesg-foundation", text: "Ethereum Service to interact with any Smart Contract.", logo: "https://i.imgur.com/Nkj8hnb.png" },
        { name: "service-discord-invitation", by: "mesg-foundation", text: "Send an invitation to MESG's Discord", logo: "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png" },
        { name: "service-webhook", by: "mesg-foundation", text: "Receive HTTP connections and emit events with data", logo: "http://www.webhook.com/static/logo/logo.png" },
        { name: "mesg-pusher", by: "Roms1383", text: "MESG Service for Pusher", logo: "https://d21buns5ku92am.cloudfront.net/67967/logo/retina-1530539712.png" },
      ]
    }
  },
  mutations: {
    updateServices(state, payload) {
      state.services = payload
    }
  },
  actions: {
    refreshServices(context) {
      return new Promise((resolve) => {
        var request = new ListServicesRequest();
        coreClient.listServices(request, {}, function(err, response) {
          var services = []
          // eslint-disable-next-line
          console.log(err)
          response.getServicesList().forEach((service) => {
            services.push({
              hash: service.getHash(),
              sid: service.getSid(),
              name: service.getName(),
              status: service.getStatus(),
            })
          })
          context.commit('updateServices', services);
          resolve();
        });
      });
    },
    deployService(a,file) {
      return new Promise((resolve) => {
        var request = new DeployServiceRequest();
        // request.setUrl("https://github.com/mesg-foundation/service-webhook")
        var stream = coreClient.deployService();
        stream.on('data', function(a,b){
          console.log(a,b)

          resolve();
        })

              var reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function() {

        var arrayBuffer = this.result,
          array = new Uint8Array(arrayBuffer)


          var request = new DeployServiceRequest();
          request.setChunk(array)
          console.log(1)
          stream.write(request)
          stream.write(request)
      }

      });
    }
  }
}