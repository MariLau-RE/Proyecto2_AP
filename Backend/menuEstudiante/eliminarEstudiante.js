import { collection, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { db } from "../configDatabase.js"

const usuarios = collection(db, 'Usuarios');
/*FALTA CONECTAR AL FRONT*/
async function eliminarEstudiante() {
    var carnet = localStorage.getItem('carnet');
    try {
        await deleteDoc(doc(usuarios, carnet));
        console.log("Usuario eliminado con ID: ", carnet);
        alert("Cuenta eliminada con éxito.")
    } catch (e) {
        console.error("Error al eliminar el documento: ", e);
    }
}

// Asigna eliminarEstudiante al objeto window
window.eliminarEstudiante = eliminarEstudiante;