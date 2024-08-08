# git

git add . # 添加所有文件
git commit -m "提交信息" # 提交到本地仓库
git push origin 分支名 # 推送到远程仓库
git diff # 查看修改内容
git reset --hard HEAD^ # 回退到上一个版本
git reset --hard HEAD~n # 回退到前n个版本
git reset --hard 版本号 # 回退到指定版本
git reset --soft 版本号 # 撤销commit
git reset HEAD^ # 撤销add
git log # 查看提交历史
git reflog # 查看命令历史
git ceheckout -b 分支名 # 创建并切换到新分支
git branch 分支 # 合并分支
