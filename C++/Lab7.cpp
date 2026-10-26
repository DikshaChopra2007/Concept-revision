//insertion sort 

#include <iostream>
using namespace std;

// Function to perform Insertion Sort
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        // Shift elements greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert key at its correct position
        arr[j + 1] = key;
    }
}

// Function to display the array
void displayArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int n; 
    int arr[100];
    

    cout << "Enter number of elements: ";
    cin >> n;

   
    cout << "Enter elements of the array:" << endl;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    // Display original array
    cout << "Original Array: ";
    displayArray(arr, n);

    // Sort the array
    insertionSort(arr, n);

    // Display sorted array
    cout << "Sorted Array: ";
    displayArray(arr, n);

    return 0;
}
