let gl;
let shaderProgram;
let vertices;
let buffer;
const pointDimension = 1;
let angle = 0;

const initGL = () => {
  const canvas = document.getElementById('canvas');
  gl = canvas.getContext('webgl');
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(1, 1, 1, 1);
};

const createShaders = () => {
  let vs = '';
  vs += 'attribute vec4 coords;';
  vs += 'attribute float pointSize;';
  vs += 'uniform mat4 transformMatrix;';
  vs += 'void main(void) {';
  vs += ' gl_Position = transformMatrix * coords;';
  vs += '  gl_PointSize = pointSize;';
  vs += '}';

  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vs);
  gl.compileShader(vertexShader);

  let fs = '';
  fs += 'precision mediump float;';
  fs += 'uniform vec4 color;';
  fs += 'void main(void) {';
  fs += '  gl_FragColor = color;'; // Fully opaque black
  fs += '}';

  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fs);
  gl.compileShader(fragmentShader);

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);
};

const rotateZ = angle => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const matrix = new Float32Array([
    cos, sin, 0, 0,
    -sin, cos, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]);
  const transformMatrix = gl.getUniformLocation(shaderProgram, 'transformMatrix');
  gl.uniformMatrix4fv(transformMatrix, false, matrix);
};

const rotateY = angle => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const matrix = new Float32Array([
    cos, 0, sin, 0,
    0, 1, 0, 0,
    -sin, 0, cos, 0,
    0, 0, 0, 1
  ]);
  const transformMatrix = gl.getUniformLocation(shaderProgram, 'transformMatrix');
  gl.uniformMatrix4fv(transformMatrix, false, matrix);
};

const rotateX = angle => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const matrix = new Float32Array([
    1, 0, 0, 0,
    0, cos, sin, 0,
    0, -sin, cos, 0,
    0, 0, 0, 1
  ]);
  const transformMatrix = gl.getUniformLocation(shaderProgram, 'transformMatrix');
  gl.uniformMatrix4fv(transformMatrix, false, matrix);
};

const createVertices = () => {
  vertices = [
    -0.9, -0.9, 0,
    0.9, -0.9, 0,
    0, 0.9, 0
  ];

  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  const coords = gl.getAttribLocation(shaderProgram, 'coords');
  gl.vertexAttribPointer(coords, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(coords);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  pointSize = gl.getAttribLocation(shaderProgram, 'pointSize');
  gl.vertexAttrib1f(pointSize, pointDimension);

  const color = gl.getUniformLocation(shaderProgram, 'color');
  gl.uniform4f(color, 0, 0, 0, 1);
};

const draw = () => {
  rotateX(angle += 0.01);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  requestAnimationFrame(draw);
};

initGL();
createShaders();
createVertices();
draw();
