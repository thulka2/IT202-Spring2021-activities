self.addEventListener('push', function(event) {
    let data = event.data.json();
    const title = data.title;
    const options = {
        body: data.alert
    }
    const promiseChain = self.registration.showNotification(title, options);
    event.waitUntil(promiseChain);
})