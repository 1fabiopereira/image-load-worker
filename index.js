document.querySelectorAll('img').forEach(image => {
    if (image && image.dataset && image.dataset.worker && image.dataset.worker === "true") {
        try {
            const worker = new Worker('image-load-worker.js')
            worker.postMessage([image.dataset.src])
            worker.onmessage = (e) => {
                if (e.data && typeof e.data === 'string' && e.data.split(':')[0] === 'blob') image.src = e.data
                setTimeout(() => worker.terminate(), 300)
            }
        } catch (error) {
            console.error(error)
        }
    }
})