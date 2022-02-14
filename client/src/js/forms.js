import { Validator } from 'pure-js-validator/src/validator.js';

document.addEventListener('DOMContentLoaded', () => {
    const forms = Array.from(document.getElementsByClassName('js-form-ajax'));


    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const validator = new Validator(form, async function (err, is_valid) {
                if (is_valid) {
                    const formData = new FormData(form);
                    const method = form.dataset.method;
                    const action = form.dataset.action;
                    const body = new FormData(form);
                    const value = Object.fromEntries(body, formData);
                    const response = await fetch(action, {
                        method: method,
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(value),
                    });
                    console.log(response)
                    if (response.ok) {
                        let result = await response.json();
                        form.reset();
                    }
                }
            });
        });
    });
});






