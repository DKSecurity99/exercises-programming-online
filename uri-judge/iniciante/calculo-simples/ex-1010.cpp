#include <iostream>
#include <iomanip>

using namespace std;
 
int main() {
 
    float v1, v2;
    int code1, code2, cont1, cont2;
    
    cin >> code1 >> cont1 >> v1;
    cin >> code2 >> cont2 >> v2;
    
    float total1 = cont1 * v1;
    float total2 = cont2 * v2;
    float total = total1 + total2;
    
    cout << std::fixed << std::setprecision(2);
    cout << "VALOR A PAGAR: R$ " << total << "\n";
    
    return 0;
}
