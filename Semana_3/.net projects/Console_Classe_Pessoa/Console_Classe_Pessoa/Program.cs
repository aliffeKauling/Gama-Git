using System;


namespace Console_Classe_Pessoa
{
    class Program
    {
        static void Main(string[] args)
        {
            Pessoa pessoa = new Pessoa();

            Console.WriteLine("Digite o nome da pessoa");
            pessoa.nome = Console.ReadLine();
            Console.WriteLine("Digite a idade da pessoa");
            pessoa.idade = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite o RG da pessoa");
            pessoa.rg = Console.ReadLine();
            Console.WriteLine("Digite o CPF da pessoa");
            pessoa.cpf = Console.ReadLine();


            Console.WriteLine("Nome: {0}", pessoa.nome);
            Console.WriteLine("Idade: {0}", pessoa.idade);
            Console.WriteLine("Rg: {0}", pessoa.rg);
            Console.WriteLine("Cpf: {0}", pessoa.cpf);

            Pessoa pessoaSilvia = new Pessoa();
            pessoaSilvia.nome = "Silvia";
            pessoaSilvia.idade = 32;
            pessoaSilvia.rg = "11.000.000.0";
            pessoaSilvia.cpf = "000.111.000-00";

            Console.WriteLine("{0}", pessoaSilvia.nome);
            Console.WriteLine("{0}", pessoaSilvia.idade);
            Console.WriteLine("{0}", pessoaSilvia.rg);
            Console.WriteLine("{0}", pessoaSilvia.cpf);

            pessoa.Acenar(pessoaSilvia);
            pessoa.PerguntaIdade(pessoaSilvia);
        }
    }
}
