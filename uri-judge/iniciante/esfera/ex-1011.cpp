#include <iostream>
#include <iomanip>
#include <math.h>

using namespace std;
 
int main() {
    double raio;
    double PI = 3.14159;
    
    cin >> raio;
    
    double volume = (4.0/3) * PI * pow(raio, 3);
    
    cout << std::fixed << std::setprecision(3);
    cout << "VOLUME = " << volume << "\n";
  
    return 0;
}
