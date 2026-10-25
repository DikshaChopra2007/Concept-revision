//pointer arithmetic 

#include <iostream>
using namespace std;
int main (){
int arr[5]= {10,20,30,40,50};
int *ptr =arr;
cout <<"inital address" <<ptr <<endl;
cout <<"value" <<*ptr <<endl;

ptr++;
cout<<"\n After increment"<<endl;
cout<<"\n Address"<<ptr<<endl;
cout<<"\n Value"<<*ptr<<endl;
ptr--;
cout<<"\n After increment"<<endl;
cout<<"\n Address"<<ptr<<endl;
cout<<"\n Value"<<*ptr<<endl;
ptr=ptr+2;
cout<<"\n After adding"<<endl;
cout<<"\n Address"<<ptr<<endl;
cout<<"\n Value"<<*ptr<<endl;
    return 0;
}