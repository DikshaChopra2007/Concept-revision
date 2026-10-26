#include <iostream>
using namespace std;
//Function to input matrix elements
void inputMatrix(int matrix[][10],int rows,int cols){
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            cin>>matrix[i][j];
        }
    }
}
//Function to find traspose of matrix 
void transposeMatrix(int A[][10],int T[][10],int rows,int cols){
    for (int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            T[j][i]=A[i][j];//Interchange row and column    

        
        }
    }
}
//Function to display matrix 
void displayMatrix (int matrix[][10],int rows,int cols){
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            cout<<matrix[i][j]<< " ";
        }
        cout<<endl;
    }
}
int main(){
    int A[10][10],T[10][10];
    int rows,cols;

    cout<<"Enter no. of rows and columns of first matrix";
    cin>>rows>>cols;

    cout <<"Enter elements of matrix";
    inputMatrix(A,rows,cols);

    cout<<"Transpose matrix";
    displayMatrix(T,cols,rows);
    return 0;


}