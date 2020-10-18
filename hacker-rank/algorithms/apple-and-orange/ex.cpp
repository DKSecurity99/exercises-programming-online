#include <iostream>
#include <vector>

using namespace std;

int validateDist(int s, int t, int distTree, vector<int> item) {
  int count = 0;

  for (int dist = 0; dist < item.size(); dist++){
      int sum = distTree + (item[dist]);
      if (sum >= s & sum <= t ) {
        count++;
      }
  }

  return count;
}

void countApplesAndOranges(int s, int t, int a, int b, vector<int> apples, vector<int> oranges) {
  int countApples = validateDist(s, t, a, apples);
  int countOranges = validateDist(s, t, b, oranges);

  cout << countApples << "\n";
  cout << countOranges << "\n";
}


int main() {
  vector<int> apples;
  vector<int> oranges;

  apples.push_back(-2);
  apples.push_back(2);
  apples.push_back(1);

  oranges.push_back(5);
  oranges.push_back(6);

  countApplesAndOranges(7, 11, 5, 15, apples, oranges);
  
  return 0;
}
