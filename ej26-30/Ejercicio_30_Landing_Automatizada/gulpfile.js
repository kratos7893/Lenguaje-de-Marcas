const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const notify = require('gulp-notify');

// 1. Tarea SASS -> CSS
function compilarCSS() {
    return src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'))
        .pipe(notify({ message: 'SASS compilado con éxito 🚀', onLast: true }));
}

// 2. Tarea JS -> dist/js (Copia los archivos JS a la carpeta final)
function procesarJS() {
    return src('src/js/**/*.js')
        .pipe(dest('dist/js'))
        .pipe(notify({ message: 'JavaScript actualizado 📜', onLast: true }));
}

// 3. Tarea HTML -> dist/ (Mueve los archivos HTML a la raíz de dist)
function procesarHTML() {
    return src('src/*.html')
        .pipe(dest('dist/'))
        .pipe(notify({ message: 'HTML sincronizado 🏠', onLast: true }));
}

// 4. Función Watch (Vigila cambios en tiempo real)
function watchArchivos() {
    watch('src/scss/**/*.scss', compilarCSS);
    watch('src/js/**/*.js', procesarJS);
    watch('src/*.html', procesarHTML);
}

// Exportación de tareas
exports.css = compilarCSS;
exports.js = procesarJS;
exports.html = procesarHTML;

// Tarea por defecto: Ejecuta todo una vez y se queda escuchando (Watch)
exports.default = series(
    parallel(compilarCSS, procesarJS, procesarHTML), 
    watchArchivos
);