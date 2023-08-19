#include <iostream>
#include <vector>

// Function to partition the array and return the index of the pivot element
int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high]; // Choose the last element as the pivot
    int i = low - 1; // Index of the smaller element

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            std::swap(arr[i], arr[j]); // Swap elements at i and j
        }
    }

    std::swap(arr[i + 1], arr[high]); // Swap the pivot element into its correct position
    return i + 1; // Return the index of the pivot
}

// Function to perform QuickSort
void quickSort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high); // Partition the array and get pivot index
        quickSort(arr, low, pivotIndex - 1); // Sort elements before the pivot
        quickSort(arr, pivotIndex + 1, high); // Sort elements after the pivot
    }
}

int main() {
    std::vector<int> arr = {12, 4, 5, 6, 7, 3, 1, 15, 8};
    int n = arr.size();

    std::cout << "Original array: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    quickSort(arr, 0, n - 1);

    std::cout << "Sorted array: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
