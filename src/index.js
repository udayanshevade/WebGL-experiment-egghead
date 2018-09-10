let gl;

const initGL = () => {
  const canvas = document.getElementById('canvas');
  gl = canvas.getContext('webgl');
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(1, 1, 1, 1);
};

const draw = () => {
  gl.clear(gl.COLOR_BUFFER_BIT);
};

initGL();
draw();
