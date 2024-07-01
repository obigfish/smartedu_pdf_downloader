document.getElementById('getLinks').addEventListener('click', () => {
  chrome.runtime.sendMessage({ message: "getPdfLinks" }, function(response) {
    let linksList = document.getElementById('pdfLinks');
    linksList.innerHTML = '';
    if (response.links.length > 0) {
      linksList.textContent = '链接已获取';
    } else {
      linksList.textContent = '未找到链接';
    }
  });
});


document.getElementById('downloadLinks').addEventListener('click', () => {
  chrome.runtime.sendMessage({ message: "getPdfLinks" }, function(response) {
    response.links.forEach(link => {
      let url = new URL(link);
      let fileUrl = url.searchParams.get('file');
      let headers = JSON.parse(decodeURIComponent(url.searchParams.get('headers')));
      let accessToken = headers["X-ND-AUTH"].match(/id=\\?"([^\\"]+)\\?"/)[1];
      let downloadLink = `${fileUrl}?accessToken=${accessToken}`;
      chrome.downloads.download({ url: downloadLink });
    });
  });
});
