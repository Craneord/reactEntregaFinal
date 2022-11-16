import React from "react";
import swal from "sweetalert";

const mostrarAlerts= () => {
    swal({
        position: 'top-end',
        icon: 'success',
        title: 'operaciones realizada',
        showConfirmButton: false,
        timer: 1500
    })

}



export default mostrarAlerts
