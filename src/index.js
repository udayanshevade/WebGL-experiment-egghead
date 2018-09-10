import { mat4 } from 'gl-matrix';

let gl;
let shaderProgram;
let vertices;
let buffer;
let pointSize;
const pointDimension = 1;
const matrix = mat4.create();
const vertexCount = 30;

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

const createVertices = () => {
  vertices = [];
  for (let i = 0; i < vertexCount; i += 1) {
    vertices.push(Math.random() * 2 - 1);
    vertices.push(Math.random() * 2 - 1);
    vertices.push(Math.random() * 2 - 1);
  }

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
  mat4.rotateX(matrix, matrix, 0.007);
  mat4.rotateY(matrix, matrix, 0.013);
  mat4.rotateZ(matrix, matrix, 0.01);
  const transformMatrix = gl.getUniformLocation(shaderProgram, 'transformMatrix');
  gl.uniformMatrix4fv(transformMatrix, false, matrix);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
  requestAnimationFrame(draw);
};

initGL();
createShaders();
createVertices();
draw();
