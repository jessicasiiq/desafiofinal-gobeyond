# Desafio Final ***Go Beyond 3 (Corebiz)*** **•** ***Front-end →*** Criação de uma página *web* da ***Corebiz*** em ***React*** 🎨🔥✨

🧡 Desenvolvimento da quarta atividade *front-end web* proposta para o intensivo ***Go Beyond 3*** da ***Corebiz*** ➡️ construir uma página *web* da ***Corebiz*** utilizando ***React***.

## ⭐ **Projeto base:**

Para o desenvolvimento do projeto foi disponibilizado um *design* de inspiração. Acesse o material por aqui:

- [Xd Adobe](https://xd.adobe.com/view/e100320d-9539-4cd9-9146-e27f75204e69-b453/) 
- [Vercel](https://go-beyond-2021-final-challenge.vercel.app)
- [Instruções](https://whimsical.com/go-beyond-TcK8nmurXeQmuiFyvwy3Kd)

## 🌠 **Construção do projeto:**

Como nos foi solicitado um *layout* mais fiel possível ao original, as cores, efeitos, posicionamento e fontes foram totalmente baseadas no protótipo.

### ◽ **Estruturação do projeto:**


<p align="center">
  <img src="https://user-images.githubusercontent.com/72312529/134832722-155bc37a-1f4b-4d9d-b956-ba0c94e546f8.png" />
</p>

#### 🌳 **Pasta *components* aberta:**

<p align="center">
  <img src="https://user-images.githubusercontent.com/72312529/134832733-8634dd1a-4892-4a2a-b8aa-f272d1890260.png" />
</p>

### ◾ **Paleta de cores:**

<p align="center">
  <img src="https://user-images.githubusercontent.com/72312529/134833706-bc0719fd-bdc9-4cd5-ab89-8572f87e31c2.png" />
</p>

### ◽ *****API*** consumida:**

Na construção do desafio optei por criar minha própria *API*, onde foram puxados os elementos do *slider*: imagens principais, *thumbnails* e títulos. Você pode encontrar a *API* aqui:

- [API própria utilizada no projeto](https://github.com/jessicasiiq/API-desafiofinal-gobeyond) 

Para a renderização dos elementos foi utilizado apenas um ***.map*** nas *thumbnails*, dependendo da miniatura selecionada seria renderizado o título e a imagem principal correspondendo ao objeto dela, essa leitura de escolha foi efetuada por meio do ***useContext***. Com o carregamento inicial da página o *array* inicia no *index* [0].

### ◾ **Comparação *desktop*:**

🔹 ***Header* e *main*:**
    
<p align="center">
   <img src="https://user-images.githubusercontent.com/72312529/134832816-8370a6e4-1b73-488f-b52f-a5c58c892654.png" />
</p>
        
🔹 ***Footer*:**
                                                                                                          
<p align="center">
   <img src="https://user-images.githubusercontent.com/72312529/134832838-7dfe7fe9-4ddd-4801-be30-58c620ec6114.png" />
</p>


### ◽ **Comparação *mobile*:**

🔸 ***Header* e *main*:**

<p align="center">
   <img src="https://user-images.githubusercontent.com/72312529/134832866-5ef7225b-4fbb-4eee-ab1e-b950db7959b3.png" />
</p>
        
🔸 ***Footer*:**

<p align="center">
   <img src="https://user-images.githubusercontent.com/72312529/134832890-9b5c221d-6443-4bb1-a5e2-ed5f448eecb9.png" />
</p>

## 💌 **Visão geral do projeto:**
🔹 ***Desktop*:**

<p align="center">
   <img src="https://user-images.githubusercontent.com/72312529/134832934-20fe317b-0a09-4064-97e5-3b688c335614.gif" />
</p>

<p align="center"> <em>obs.:</em> o <em>.gif</em> está fora de proporção, considerá-lo apenas para ter uma ideia dos efeitos.</p>
    
🔸 ***Mobile*:**

<p align="center">
   <img src="https://user-images.githubusercontent.com/72312529/134832945-81b9503c-ccf8-48a1-94e4-dd1d2f2ce442.gif" />
</p>
    
## 📌 **Veja meu projeto funcionando:**

- [Vercel](https://desafiofinal-gobeyond-vjni6yied-jessicasiiq.vercel.app)


## 💥 **Performace do *site*:**

Segundo o [*PageSpeed Insights*](https://developers.google.com/speed/pagespeed/insights/) minhas pontuações foram:
<br>🔹 *Desktop*:

<p align="center">
   <img src="https://user-images.githubusercontent.com/72312529/134832963-91b42645-6b68-4e47-98f0-f8f650d92b40.png" />
</p>

🔸 *Mobile*:

<p align="center">
   <img src="https://user-images.githubusercontent.com/72312529/134832967-f27921cf-4f55-4ff4-b5ad-389aa7840ae4.png" />
</p>

## 🚜 **Possíveis melhorias futuras:**

Como pôde ser visto, minha performace *mobile* ficou bem precária, talvez fosse melhor rever a responsividade.

Grata! 😋
