//understand pointer by storing address of a variable in a pointer 
// and accessing variable using pointer 
#include <iostream>
using namespace std;
int main (){
    int number =25;
    int *ptr;
    ptr=&number;
    cout<<"Value of number="<<number<<endl;
    cout<<"Address of number="<<&number<<endl;
    cout<<"Pointer Stores="<<ptr<<endl;
    cout<<"Value using pointer="<<*ptr<<endl;
return 0;
}