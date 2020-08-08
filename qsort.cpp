#include <iostream>
using namespace std;

void qsort(int a[], int left_index, int right_index)
{
    int left, right, pivot;
    if(left_index >= right_index) 
        return;
    left = left_index;
    right = right_index;
    pivot = a[(left_index + right_index) /2];
    while(left <= right) {
        while(a[left] < pivot) left++;
        while(a[right] > pivot) right--;
        if(left <= right) {
            swap(a[left],a[right]);
            left++; right--;
        }   
    }
    qsort(a,left_index,right);
    qsort(a,left,right_index);
}


int main() {
    int a[] = {8,4,2,65,2,4,6,8,81234,5,98,0};
    qsort(a, 0, 11);
    for (int i = 0; i < 12; i++) {
        cout << a[i] << " ";
    }

    return 0;
}