#include<iostream>
using namespace std;

int insertion(int a[],int n){
    int i,j,key;
    for(i=0;i<n;i++)
        {
            key=a[i];
            j=i-1;
            while(j>=0 && a[j]>key)
            {
                a[j+1]=a[j];
                j=j-1;

            }
            a[j+1]=key;
        }
    for(i=0;i<n;i++)
        cout<<a[i]<<" ";
}
int main(){
    int a[]={-2,-7,2,5,9,-10};
    int n=sizeof(a)/sizeof(a[0]);
    insertion(a,n);
    return 0;
}