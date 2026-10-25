
#include <iostream>
using namespace std;

int main() {
    int arr[100], n, value, pos, choice;

    cout << "Enter number of elements: ";
    cin >> n;

    cout << "Enter array elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    cout << "1. Delete at beginning" << endl;
    cout << "2. Delete at any position" << endl;
    cout << "3. Delete at end" << endl;
    cout << "Enter your choice: ";
    cin >> choice;

    if (choice == 1) {
        cout << "Enter value: ";
        cin >> value;

        for (int i = n; i > 0; i--) {
            arr[i] = arr[i - 1];
        }

        
        n--;
    }
    else if (choice == 2) {
        cout << "Enter position (1 to n+1): ";
        cin >> pos;

        cout << "Enter value: ";
        cin >> value;

      

        for (int i = n; i >= pos; i--) {
            arr[i] = arr[i - 1];
        }

        
        n--;
    }
    else if (choice == 3) {
        cout << "Enter value: ";
        cin >> value;

        
        n--;
    }
    else {
        cout << "Invalid choice." << endl;
        return 1;
    }

    cout << "Updated array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }


    return 0;
}
