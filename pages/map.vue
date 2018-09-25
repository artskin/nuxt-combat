<style>

#map{width: 800px;height: 600px;}
</style>

<template>
  <div class="container">
    
      <h1 class="title">智慧数据</h1>
      
      <div id="map"></div>
    
  </div>
</template>

<script>

import * as maptalks from 'maptalks'
import 'maptalks/dist/maptalks.css'


export default {
  components: {
   
  },
  data(){
    return{
      form: {
        name: '',
        pwd: '',
        delivery: false,
      }
    }
  },
  mounted() {
    var map = new maptalks.Map('map',{
      center: [5, 3],
      zoom:7,
      maxZoom : 10,
      minZoom : 5
    });
    console.log(map);
    var imageLayer = new maptalks.ImageLayer('images',[{
      url : '/floor.png',
      extent: [8.99, 0, 0, 6.74],
      opacity : 1
    }]);
    imageLayer.setId("imgbg")
    map.addLayer(imageLayer);

    var layer = new maptalks.VectorLayer('vector').addTo(map);
    var drawTool = new maptalks.DrawTool({
        mode: 'Point'
      });

    drawTool.addTo(map).disable();

    drawTool.on('drawend', function (param) {
      console.log(param.geometry);
      layer.addGeometry(param.geometry);
    });

    var items = ['Point', 'LineString', 'Polygon', 'Ellipse', 'Rectangle'].map(function (value) {
      return {
        item: value,
        click: function () {
          drawTool.setMode(value).enable();
        }
      };
    });

    var toolbar = new maptalks.control.Toolbar({
      items: [
        {
          item: 'Shape',
          children: items
        },
        {
          item: 'Disable',
          click: function () {
            drawTool.disable();
          }
        },
        {
          item: 'Clear',
          click: function () {
            layer.clear();
          }
        }
      ]
    }).addTo(map);
  },
  methods:{
    onSubmit(){
      alert("chengg")
    }
  }
}
</script>


