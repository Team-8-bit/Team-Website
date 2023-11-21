## How to Set Up the Website for Testing

1. **Using GitHub:**
   - Navigate to the GitHub repository.
   - Click on the "Branches" button. Then, select the branch you want to switch to. 
   - Then click on the green code button to reveal the code options.


2. **Download ZIP:**
   - Select "Download ZIP" from the dropdown menu.
   - Save the downloaded ZIP file to your local machine.

3. **Unzip the File:**
   - Locate the downloaded ZIP file on your computer.
   - Unzip the contents of the file to a desired location.

4. **Open in Browser:**
   - After extraction, find the `index.html` file in the unzipped folder.
   - Open the `index.html` file with a web browser to view and test the website.


---

## Cloning a Git Repository and Creating a New Branch for Development

### Step 1: Install Git
If Git is not installed on your machine, download and install it from [https://git-scm.com/](https://git-scm.com/).

### Step 2: Open a Terminal or Command Prompt

### Step 3: Clone the Git Repository
Navigate to the directory where you want to clone the repository using the `cd` command. Run the following command to clone the repository:

```bash
git clone https://github.com/Team-8-bit/team-8-bit.github.io
```

### Step 4: Change into the Repository Directory
Navigate into the newly cloned repository:

```bash
cd team-8-bit.github.io
```

### Step 5: Create a New Branch
To create a new branch for development, use the following command:

```bash
git checkout -b user/<your_name>/feature/<feature_name>
```

Replace `<your_name>` with your name and `<feature_name>` with the feature you are working on. This command creates and switches to the new branch.

### Step 6: Start Developing
Now you're on your new branch, and you can start making changes to the code. Commit your changes regularly using:

```bash
git add .
git commit -m "Your commit message here"
```

### Step 7: Push the Branch to the Remote Repository
When you're ready to share your changes or create a backup on the remote repository, use the following command to push your branch:

```bash
git push origin <branch_name>
```

Replace `<branch_name>` with the name of your branch.

## Summary

- Install Git.
- Open a terminal or command prompt.
- Clone the Git repository with `git clone https://github.com/Team-8-bit/team-8-bit.github.io`.
- Change into the repository directory with `cd team-8-bit.github.io`.
- Create a new branch with `git checkout -b user/<your_name>/feature/<feature_name>`.
- Start making changes and commit them.
- Push the branch to the remote repository with `git push origin <branch_name>`.

Now you have successfully cloned a Git repository and created a new branch for development. Happy coding!

---