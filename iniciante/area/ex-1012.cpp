#include <iostream>
#include <iomanip>
#include <math.h>

using namespace std;
 
int main() {
    double A,B,C;
    double PI = 3.14159;
    
    cin >> A >> B >> C;
    
    float areaTR = (A * C) / 2;
    float areaC = PI * pow(C, 2);
    float areaT = ((A + B) / 2) * C;
    float areaQ = B * B;
    float areaR = A * B;
    
    cout << std::fixed << std::setprecision(3);
    cout << "TRIANGULO: " << areaTR << "\n";
    cout << "CIRCULO: " << areaC << "\n";
    cout << "TRAPEZIO: " << areaT << "\n";
    cout << "QUADRADO: " << areaQ << "\n";
    cout << "RETANGULO: " << areaR << "\n";

    return 0;
}
