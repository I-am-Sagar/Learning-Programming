## 1. History of Git

Let's start learning Git!

### 1.1 - What is Git?

Git is a software that keeps track of changes made in files, especially text files. It helps in managing different versions of the same folder and help in moving back and forth between versions. Hence, git is also known as **VCS (Version Control System).** Programmers used git widely to manage the source code. Therefore, git is also called as **SCM (Source Code Management)** tool.

Although we can interchangably use the terms VCS and SCM in context of git, there are some VCS which are not SCM. For example,
1. We can manage files by just naming them accordingly. Eg. Budget_v4.xls, Logo_v2.xls, etc. 
2. Adobe Photoshop's History Panel
3. History of edits in Docs, Sheets, PPT, etc. 
4. `Ctrl + Z` and `Ctrl + Y` in Windows

<hr/>

### 1.2 - History of Git

Before getting started with git, it is interesting to know why it was formed. Especially because git is not the only SCM tool. Then what features of it made it so popular. We will see five of the most important SCM tools that came before git. 

**1. SCCS (Source Code Control System)** 

SCCS was released in late 1972 by AT&T Bell Labs for managing the source code of various software. It was closed source and was bundled free with Unix. Universities taught students to manage code using SCCS and hence it became very popular. 

To maintain three versions of a document, instead of storing all three versions of a document, SCCS stored only the original document and then saved the changes required to reach upto its various versions. In this way, when someone needed the version five of a document, SCCS would apply 4 sets of changes to the original document and provide the required version.

It was the most efficient way to store multiple versions of docs at that time. 

**2. RCS (Revision Control System)**

RCS was released in 1982 by GNU Project Team. It was open source and cross platform. It made alot of improvements over SCCS. RCS had fewer and cleaner commands, simpler syntax and faster in performance. 

RCS unlike SCCS stored the most recent file instead of the original document and the changes required to go backwards. So now to get the previous versions, we needed to apply changes. So the working mechanism was flipped by RCS. And since most of the times we need the most recent document, it became faster and logical to use RCS. 

RCS & SCCS had this drawback of only able to work with one file at a time. So we can't keep track of multiple files. 

**3. Concurrent Versions System (CVS)**

It was released in 1990 by The CVS Team. It was open source and cross platform. CVS brought two big innovations. 

CVS could keep track of groups of files instead of just a single file. More importantly, CVS enabled to work on those files concurrently. This means, all files could be put in some remote place and more than one user can work on the same file at the same time (concurrency). 

**4. Apache Subversion (SVN, shortform for SubVersioN)**

It was released in 2000 by Apache Software Foundation as open source and cross platform VCS. 

SVN was faster than CVS because of better storage format and allowed storing non-text files like images, pdfs, etc. The performance was mainly improved because SVN was not keeping the track of groups of files but by tracking entire folders/directories. It stored the entire snapshot of the directory. Because of such subtle improvements, it solved many issues. For example, CVS had a hard time if we renamed the file in the group of files; whereas SVN will track that change with no problem. Even moving files from one subdirectory to another was handled by SVN. 

This remained the most popular version control system until Git came out. 

**5. Bitkeeper SCM**

It was released in 2000 by Bitmover Inc., as proprietary and cross platform SCM tool. Bitmover company provided two versions of Bitkeeper - the community version, the free one and the premium version, which they sold it to the customers. Linus Torvalds used the community version for managing the source code of Linux kernel from 2002-2005. It became controversial to use proprietary SCM for an open-source Linux project as everyone in the world contributing to Linux was worried about the possibility of Bitmover stopping to provide the community version for free. And exactly that happened. On April 2005, the community version was not free anymore! 

During this time, Linus Torvalds was making his own SCM tool, the Git. When Bitkeeper SCM stopped being free, the Git was released i.e. in April 2005. 

But _why did Linus chose Bitkeeper SCM for managing the Linux code even though it was not as popular as other open source alternatives like SVN or CVS?_ The answer is because Bitkeeper SCM was _distributed VCS_, ans so is Git today. 

Distributed VCS means that everyone can work on the source code independently on their local machine. They need not require to be connected to the remote server for working concurrently, like CVS. This feature enabled users to work offline as well and then publish their code to remote server once they get internet connection. 

Because Git was faster, easier to use, open-source, cross-platform, distributed VCS, it became hit! People started using it enormously. Here are some rough statistics: In 2008, Github was launched. Github acted like that remote server where people could keep a copy of their code. By 2009, Github had over 50k repositories and 100k users. However, by 2011, Github had over 2 million repositories and over 1 million users. 

<hr/>