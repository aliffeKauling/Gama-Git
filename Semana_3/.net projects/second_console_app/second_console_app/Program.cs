using System;

namespace second_console_app
{
    class Program
    {
        static void Main(string[] args)
        {
            string nome;
            int idade;

            Console.WriteLine("Digite seu nome: ");
            nome = Console.ReadLine();
            Console.WriteLine("Digite sua idade: ");
            idade = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Hello " + nome);
            Console.WriteLine("Eu tenho " + idade + "anos");
            
            if(idade > 18)
            {
                Console.WriteLine("Pessoa maior de idade");
            }
            else
            {
                Console.WriteLine("Precisa estar acompanhado");
            }
     
        }
    }
}
