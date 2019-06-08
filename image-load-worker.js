onmessage = function(e) {
    fetch(e.data[0])
        .then((response) => response.blob())
        .then((blob) => postMessage(URL.createObjectURL(blob)))
  }
