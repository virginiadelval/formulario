const scriptURL = 'https://script.google.com/macros/s/AKfycbyUH6KD3NA_LIacfEOjjIHkczZTTQw2Bbh2Ftw1cUfDhQgG4vViYV0KXn8EwP1OTE2ynA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(respose => alert("Gracias por el dato, vuelva a recargar la web"))
    .then(()=> {window.localStorage.reload(); })
    .catch(error => console.error('Error en la carga', error.messenge))
})
