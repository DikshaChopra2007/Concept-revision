
#include <iostream>
using namespace std;

#define MAX 5

int stack[MAX];
int top = -1;

// Function to push a value into the stack
void push(int value)
{
    if (top == MAX - 1)
    {
        cout << "Stack Overflow!" << endl;
    }
    else
    {
        top++;
        stack[top] = value;
        cout << value << " pushed into stack." << endl;
    }
}

// Function to pop a value from the stack
void pop()
{
    if (top == -1)
    {
        cout << "Stack Underflow!" << endl;
    }
    else
    {
        cout << stack[top] << " popped from stack." << endl;
        top--;
    }
}

// Function to display the stack
void display()
{
    if (top == -1)
    {
        cout << "Stack is empty." << endl;
    }
    else
    {
        cout << "Stack elements are:" << endl;

        for (int i = top; i >= 0; i--)
        {
            cout << stack[i] << endl;
        }
    }
}

int main()
{
    int choice, value;

    do
    {
        cout << "\n1. Push" << endl;
        cout << "2. Pop" << endl;
        cout << "3. Display" << endl;
        cout << "4. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        if (choice == 1)
        {
            cout << "Enter value to push: ";
            cin >> value;
            push(value);
        }
        else if (choice == 2)
        {
            pop();
        }
        else if (choice == 3)
        {
            display();
        }
        else if (choice == 4)
        {
            cout << "Program terminated." << endl;
        }
        else
        {
            cout << "Invalid choice!" << endl;
        }

    } while (choice != 4);

    return 0;
}
