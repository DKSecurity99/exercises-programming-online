#include <iostream>
#include <vector>

using namespace std;

vector<int> compareTriplets(vector<int> a, vector<int> b) {
  int alicePontos = 0;
  int bobPontos = 0;
  vector<int> pontos(2);

  for(int index = 0; index < a.size(); index++){
    if (a[index] >= 1 && a[index] <= 100 && b[index] >= 1 &&b[index] <= 100){
      if (a[index] > b[index]){
        alicePontos++;
      } else if (a[index] < b[index]) {
        bobPontos++;
      }
    }
  }
  pontos[0] = alicePontos;
  pontos[1] = bobPontos;
  return pontos;
  //return vector<int> points(alicePontos, bobPontos);
}

int main() {
  
  return 0;
}
