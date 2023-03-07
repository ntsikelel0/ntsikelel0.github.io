import java.util.Scanner;
public class whileclass{

    public static void main (String[] args){

        Scanner scannerObj = new Scanner(System.in);

        int sum = 0;

        System.out.print("Enter a number: ");
        int number = scannerObj.nextInt();

        while(number > 0)
        {
            sum = sum + number;
            System.out.print("Enter a number again: ");
            number = scannerObj.nextInt();
        }
            
        System.out.println(sum);

    }

}