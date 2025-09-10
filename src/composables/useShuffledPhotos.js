import { ref, onMounted } from "vue";

export function useShuffledPhotos(photos) {
    const shuffledPhotos = ref([]);

    function loadImagesWithHeight(photosArray) {
        return Promise.all(
            photosArray.map(
                (photo) =>
                    new Promise((resolve) => {
                        const img = new Image();
                        img.src = photo.url;
                        img.onload = () => {
                            resolve({ ...photo, height: img.height });
                        };
                    }),
            ),
        );
    }

    function shufflePhotosByHeight(photosArray) {
        const result = [];
        const copy = [...photosArray];

        while (copy.length) {
            let i = 0;
            while (i < copy.length) {
                const last = result[result.length - 1];
                if (!last || last.height !== copy[i].height) {
                    result.push(copy[i]);
                    copy.splice(i, 1);
                    break;
                }
                i++;
            }
            if (i === copy.length) {
                result.push(copy.shift());
            }
        }

        return result;
    }

    onMounted(async () => {
        const photosWithHeight = await loadImagesWithHeight(photos);
        shuffledPhotos.value = shufflePhotosByHeight(photosWithHeight);
    });

    return {
        shuffledPhotos,
    };
}
