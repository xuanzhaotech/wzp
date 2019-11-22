window.addEventListener('load',function(){
  var canvas = document.createElement('canvas');
  canvas.id = 'live2d';
  canvas.width = '280';
  canvas.height = '250';
  canvas.style.cssText = 'position: fixed;right:-10px;bottom:0;';
  document.body.appendChild(canvas);
  loadlive2d("live2d", "/wzp.github.io/live2dModels/live2d/model/kesshouban/model.json");
})