
#include <iostream>
using namespace std;

// Function to input matrix elements
void inputMatrix(int matrix[][10], int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
        }
    }
}

// Function to multiply two matrices
void multiplyMatrix(int A[][10], int B[][10], int C[][10],
                    int r1, int c1, int c2) {
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            C[i][j] = 0;

            for (int k = 0; k < c1; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}

// Function to display matrix
void displayMatrix(int matrix[][10], int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cout << matrix[i][j] << " ";
        }
        
    }
}

int main() {
    int A[10][10], B[10][10], C[10][10];
    int r1, c1, r2, c2;

    cout << "Enter rows and columns of first matrix: ";
    cin >> r1 >> c1;

    cout << "Enter rows and columns of second matrix: ";
    cin >> r2 >> c2;

   

    // Check multiplication condition
    if (c1 != r2) {
        cout << "Matrix multiplication not possible." << endl;
        return 0;
    }

    cout << "Enter elements of first matrix:" << endl;
    inputMatrix(A, r1, c1);

    cout << "Enter elements of second matrix:" << endl;
    inputMatrix(B, r2, c2);

    // Multiply matrices
    multiplyMatrix(A, B, C, r1, c1, c2);

    // Display resultant matrix
    cout << "Resultant matrix:" << endl;
    displayMatrix(C, r1, c2);

    return 0;
}
