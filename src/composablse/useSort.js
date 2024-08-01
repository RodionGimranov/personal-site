import { ref, computed } from "vue";

export function useSort(dataList) {
    const isOldSortActive = ref(false);
    const isNewSortActive = ref(true);

    const sortedData = ref([...dataList].sort((a, b) => b.id - a.id));

    const useSortOld = () => {
        isOldSortActive.value = true;
        isNewSortActive.value = false;
    };

    const useSortNew = () => {
        isOldSortActive.value = false;
        isNewSortActive.value = true;
    };

    const bgClass = computed(() => {
        return isOldSortActive.value ? "bg_old" : "bg_new";
    });

    const displayedData = computed(() => {
        return isOldSortActive.value ? sortedData.value.slice().reverse() : sortedData.value;
    });

    return {
        isOldSortActive,
        isNewSortActive,
        useSortOld,
        useSortNew,
        bgClass,
        displayedData,
    };
}
