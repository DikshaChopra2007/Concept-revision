//matrix multiplication
/*
1)Input matrix elements
2)multiply matrices
3) Display matrix */
#include <iostream>
using namespace std;
//function to input matrix elements 
void inputMatrix(int matrix[][10] , int rows,int cols){
    for(int i=0;i<rows;i++){
for(int j=0;j<cols;j++){
    cout<<matrix[i][j]<< " ";
}
cout<<endl;    
}
}
//Function to multiply two matrices
void multiplyMatrix(int A[][10],int B[][10],int C[][10],int r1,int c1,int c2){
    for(int i =0; i<r1;i++){
        for (int j =0;j<c2;j++)
    {
        C[i][j]=0;
        for (int k =0;k<c1;k++)
        {
            C[i][j]=C[i][j]+A[i][k]+B[k][j];
        }
    }
    }
}
//Function to display matrix
void displayMatrix(int matrix[][10],int rows, int cols){
    for(int i = 0 ; i<rows;i++){
        for(int j=0;j<cols;j++){

            cout<<matrix[i][j]<<" ";

        }
        cout<<endl;
    }
}

int main(){
    int A[10][10] , B[10][10] ,     C[10][10];
    int r1,c1,r2,c2;
    
    cout<<"Enter Rows and columns of first matrix";
    cin>>r1>>c1;
    cout<<"Enter Rows and columns of second matrix";
    cin>>r2>>c2;
//Check multiplication condition
if(c1!=r2){
    cout<<"Matrix multiplication not possible";

}
cout<<"Enter elements of first matrix ";
inputMatrix(A,r1,c1);

cout<<"Enter elements of second matrix ";
inputMatrix(B,r2,c2);
//Multiply matrices
multiplyMatrix(A,B,C,r1,c1,c2);
cout<<"Resultant matrix";

//Display matrix
displayMatrix(C,r1,c2);
return 0;
}