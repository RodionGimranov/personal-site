import { ref, onMounted, type Ref } from "vue";
import type { PhotoBase, PhotoWithHeight } from "@/types";

export function useShuffledPhotos(photos: PhotoBase[]) {
    const shuffledPhotos: Ref<PhotoWithHeight[]> = ref([]);

    const loadImagesWithHeight = (photosArray: PhotoBase[]): Promise<PhotoWithHeight[]> => {
        return Promise.all(
            photosArray.map(
                (photo) =>
                    new Promise<PhotoWithHeight>((resolve) => {
                        const img = new Image();
                        img.src = photo.url;

                        img.onload = () => {
                            resolve({
                                ...photo,
                                height: img.height,
                            });
                        };
                    }),
            ),
        );
    };

    const shufflePhotosByHeight = (photosArray: PhotoWithHeight[]): PhotoWithHeight[] => {
        const result: PhotoWithHeight[] = [];
        const copy = [...photosArray];

        while (copy.length) {
            let i = 0;

            while (i < copy.length) {
                const current = copy[i];

                if (!current) {
                    i++;
                    continue;
                }

                const last = result[result.length - 1];

                if (!last || last.height !== current.height) {
                    result.push(current);
                    copy.splice(i, 1);
                    break;
                }

                i++;
            }

            if (i === copy.length) {
                const first = copy.shift();
                if (first) result.push(first);
            }
        }

        return result;
    };

    onMounted(async () => {
        const photosWithHeight = await loadImagesWithHeight(photos);
        shuffledPhotos.value = shufflePhotosByHeight(photosWithHeight);
    });

    return {
        shuffledPhotos,
    };
}
