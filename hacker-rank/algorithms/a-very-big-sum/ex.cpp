#include <iostream>
#include <vector>

using namespace std;

long aVeryBigSum(vector<long> ar) {
  long int sum = 0;
  for(long index = 0; index < ar.size(); index++){
    sum += ar[index];
  } 
  return sum;
}

int main() {
  
  return 0;
}
