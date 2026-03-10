// 1. Importa las funciones necesarias de gulp
// Agregamos 'series' a la lista de importación
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// 2. Define la tarea para compilar CSS
function compilarCSS() {
    // Faltaba el método 'src' antes de la ruta
    return src('src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

// Tarea para observar cambios
function watchArchivos() {
    // Es mejor apuntar a la carpeta scss específica
    watch('src/scss/**/*.scss', compilarCSS);
}

// 3. Exporta las tareas
exports.css = compilarCSS;

// Usamos 'series' para ejecutar la compilación inicial y luego el watch
exports.default = series(compilarCSS, watchArchivos);