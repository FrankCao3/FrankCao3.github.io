var posts=["posts/hello-world","posts/利用hexo+gitHub搭建个人博客","posts/机器学习实战","posts/DVWA靶场/1.SQL注入实战","posts/DVWA靶场/2.Web爆破攻击实战","posts/DVWA靶场/4.DOM型XSS攻击实战","posts/DVWA靶场/4.反射型 XSS 攻击实战","posts/DVWA靶场/3.命令注入攻击实战","posts/DVWA靶场/4.存储型 XSS 攻击实战","posts/DVWA靶场/5.文件包含攻击实战","posts/DVWA靶场/6.文件上传攻击实战","posts/DVWA靶场/7.SQL注入爆表","posts/DVWA靶场/8.XSS攻击渗透报告","posts/数通/1.VLAN实验","posts/数通/4.三层交换","posts/数通/2.IRF、聚合实验","posts/数通/3.route-static","posts/数通/5.OSPF","posts/数通/6.NAT","posts/渗透测试/0. 渗透测试全流程总结","posts/数通/7.综合实验","posts/渗透测试/1. 基础概念与信息收集","posts/渗透测试/2. SQL注入-WAF绕过","posts/渗透测试/10. XXE漏洞","posts/渗透测试/12. 逻辑漏洞","posts/渗透测试/11. 反序列化","posts/渗透测试/4. CRLF漏洞（反弹型XSS）","posts/渗透测试/3. 文件上传","posts/渗透测试/2. SQL注入","posts/渗透测试/4. XSS","posts/渗透测试/5.CSRF、SSRF","posts/渗透测试/6. RCE代码及命令执行","posts/渗透测试/7. 文件包含","posts/渗透测试/8. 文件下载","posts/渗透测试/9. 文件读取","posts/计算机基础/3. STL","posts/计算机基础/1. C_C++","posts/计算机基础/6. 操作系统","posts/计算机基础/5. 计算机网络","posts/计算机基础/2. 数据结构"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};