#include <iostream>
#include <cstring>

#define NAME_LEN 45
#define MAX 100

typedef struct _ACCOUNT
{
    char name[NAME_LEN];
    int id;
    int balance;
} ACCOUNT;

enum
{
    MAKE = 1,
    DEPOSIT,
    WITHDRAW,
    INQUIRE,
    EXIT
};

ACCOUNT pArray[MAX] = {
    0,
};
int index = 0;

int input_int();
int input_menu();
void make_an_account();
void inquire();

using std::cin;
using std::cout;
using std::endl;

int main()
{
    while (1)
    {
        int s = input_menu();

        switch (s)
        {
        case MAKE:
            make_an_account();
            break;
        case DEPOSIT:
        case WITHDRAW:
        case INQUIRE:
            inquire();
            break;
        case EXIT:
            printf("Good-bye.\n");
            exit(EXIT_SUCCESS);
        default:
            std::cout << s << " is not implemented. Please try again." << std::endl;
        }
    }
    return 0;
}
int input_int()
{
    int input;
    while (1)
    {
        printf(">> ");
        if ((scanf("%d%*c", &input)) == 1)
            return input;
        else
        {
            printf("Please insert an integer number. Try again.\n");
            while (getchar() != '\n')
                continue;
        }
    }
}
int input_menu()
{
    while (1)
    {
        printf("Please select a menu and press Enter.\n\n");
        printf("1. MAKE AN ACCOUNT\n");
        printf("2. DEPOSIT\n");
        printf("3. WITHDRAW\n");
        printf("4. INQUIRE\n");
        printf("5. EXIT\n");
        int index = input_int();
        if (index >= 1 && index <= 5)
            return index;
        else
        {
            printf("Please input a valid number. try again.\n");
        }
    }
}
void make_an_account()
{
    char name[NAME_LEN];
    int id;
    int balance;
    std::cout << "Input name and press Enter." << std::endl;
    std::cin >> name;
    std::cout << "Input account id" << std::endl;
    std::cin >> id;
    std::cout << "Input money" << std::endl;
    std::cin >> balance;

    strcpy(pArray[index].name, name);
    pArray[index].id = id;
    pArray[index].balance = balance;
    index++;
}
void inquire()
{
    for (int num = 0; num < index; ++num)
    {
        std::cout << "name : " << pArray[num].name << std::endl;
        std::cout << "id   : " << pArray[num].id << std::endl;
        std::cout << "balance   : " << pArray[num].balance << std::endl;
    }
}