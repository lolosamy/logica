@echo off
:MENU
cls
echo ==============================
echo           MENU
echo ==============================
echo 1. Criar diretório "aula"
echo 2. Listar diretório "aula"
echo 3. Sair
echo ==============================
set /p choice="Escolha uma opção: "

if "%choice%"=="1" goto CRIAR_DIR
if "%choice%"=="2" goto LISTAR_DIR
if "%choice%"=="3" exit
echo Opção inválida! Tente novamente.
pause
goto MENU

:CRIAR_DIR
mkdir aula
echo Diretório "aula" criado com sucesso!
pause
goto MENU

:LISTAR_DIR
echo Listando arquivos do diretório "aula":
dir aula
pause
goto MENU
