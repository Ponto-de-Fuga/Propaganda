const videos = [
    'LINK_DO_VIDEO_1',
    'LINK_DO_VIDEO_2',
    // Adicione mais links de vídeos aqui
];

const videoContainer = document.getElementById('video-container');

videos.forEach(link => {
    const videoElement = document.createElement('iframe');
    videoElement.src = link;
    videoElement.width = "560";
    videoElement.height = "315";
    videoElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    videoElement.allowFullscreen = true;
    videoContainer.appendChild(videoElement);
});
