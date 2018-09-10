let gl;
let shaderProgram;
let vertices;
const vertexCount = 5000;
let buffer;
let pointsGrowing = false;
const pointDimension = 2;
let mouseX = 0;
let mouseY = 0;
const proximityThreshold = 0.2;

const map = (value, minSrc, maxSrc, minDist, maxDist) =>
  ((value - minSrc) / (maxSrc - minSrc)) * (maxDist - minDist) + minDist;

canvas.addEventListener('mousemove', e => {
  mouseX = map(event.clientX, 0, canvas.width, -1, 1);
  mouseY = map(event.clientY, 0, canvas.height, 1, -1);
});

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
  vs += 'void main(void) {';
  vs += ' gl_Position = coords;';
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
  }

  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  const coords = gl.getAttribLocation(shaderProgram, 'coords');
  gl.vertexAttribPointer(coords, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(coords);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  pointSize = gl.getAttribLocation(shaderProgram, 'pointSize');
  gl.vertexAttrib1f(pointSize, pointDimension);

  const color = gl.getUniformLocation(shaderProgram, 'color');
  gl.uniform4f(color, 1, 0, 0, 1);
};

const draw = () => {
  for (let i = 0; i < vertexCount * 2; i += 2) {
    const vertexX = vertices[i];
    const vertexY = vertices[i + 1];
    const dx = vertexX - mouseX;
    const dy = vertexY - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < proximityThreshold) {
      vertices[i] = mouseX + (dx / dist) * 0.2;
      vertices[i + 1] = mouseY + (dy / dist) * 0.2;
    } else {
      vertices[i] += Math.random() * 0.01 - 0.005;
      vertices[i + 1] += Math.random() * 0.01 - 0.005;
    }
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.POINTS, 0, vertexCount);

  requestAnimationFrame(draw);
};

initGL();
createShaders();
createVertices();
draw();
