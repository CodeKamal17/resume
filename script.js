//  JavaScript for Photo Upload 
    
        const photoUpload = document.getElementById('photoUpload');
        const profilePhoto = document.getElementById('profilePhoto');
        const photoContainer = document.getElementById('photoContainer');

        photoUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    profilePhoto.src = event.target.result;
                    photoContainer.classList.remove('no-photo');
                    localStorage.setItem('resumePhoto', event.target.result);
                }
                reader.readAsDataURL(file);
            }
        });

        window.addEventListener('load', function() {
            const savedPhoto = localStorage.getItem('resumePhoto');
            if (savedPhoto) {
                profilePhoto.src = savedPhoto;
                photoContainer.classList.remove('no-photo');
            }
        });
    