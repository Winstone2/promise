function delayedExecution(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Execution delayed for ${time} milliseconds`);
        }, time);
    });
}

delayedExecution(3000)
    .then(message => console.log(message))
    .catch(error => console.error(error));
