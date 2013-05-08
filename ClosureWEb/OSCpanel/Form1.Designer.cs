namespace OSCpanel
{
    partial class Form1
    {
        /// <summary>
        /// 設計工具所需的變數。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清除任何使用中的資源。
        /// </summary>
        /// <param name="disposing">如果應該處置 Managed 資源則為 true，否則為 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form 設計工具產生的程式碼

        /// <summary>
        /// 此為設計工具支援所需的方法 - 請勿使用程式碼編輯器
        /// 修改這個方法的內容。
        /// </summary>
        private void InitializeComponent()
        {
            this.msg = new System.Windows.Forms.TextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.add = new System.Windows.Forms.TextBox();
            this.txt2 = new System.Windows.Forms.Label();
            this.txt3 = new System.Windows.Forms.Label();
            this.port = new System.Windows.Forms.TextBox();
            this.txt1 = new System.Windows.Forms.Label();
            this.userMsg = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // msg
            // 
            this.msg.Location = new System.Drawing.Point(243, 52);
            this.msg.Name = "msg";
            this.msg.Size = new System.Drawing.Size(340, 22);
            this.msg.TabIndex = 0;
            this.msg.Text = "Hello OSC World!!";
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(592, 51);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 1;
            this.button1.Text = "Send";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // add
            // 
            this.add.Location = new System.Drawing.Point(121, 52);
            this.add.Name = "add";
            this.add.Size = new System.Drawing.Size(100, 22);
            this.add.TabIndex = 2;
            this.add.Text = "/osctest";
            // 
            // txt2
            // 
            this.txt2.AutoSize = true;
            this.txt2.Location = new System.Drawing.Point(121, 34);
            this.txt2.Name = "txt2";
            this.txt2.Size = new System.Drawing.Size(67, 12);
            this.txt2.TabIndex = 3;
            this.txt2.Text = "OSC Address";
            // 
            // txt3
            // 
            this.txt3.AutoSize = true;
            this.txt3.Location = new System.Drawing.Point(241, 34);
            this.txt3.Name = "txt3";
            this.txt3.Size = new System.Drawing.Size(71, 12);
            this.txt3.TabIndex = 3;
            this.txt3.Text = "Your Message";
            // 
            // port
            // 
            this.port.Location = new System.Drawing.Point(37, 52);
            this.port.Name = "port";
            this.port.Size = new System.Drawing.Size(61, 22);
            this.port.TabIndex = 2;
            this.port.Text = "9000";
            // 
            // txt1
            // 
            this.txt1.AutoSize = true;
            this.txt1.Location = new System.Drawing.Point(37, 34);
            this.txt1.Name = "txt1";
            this.txt1.Size = new System.Drawing.Size(49, 12);
            this.txt1.TabIndex = 3;
            this.txt1.Text = "UDP port";
            // 
            // userMsg
            // 
            this.userMsg.Location = new System.Drawing.Point(37, 106);
            this.userMsg.Multiline = true;
            this.userMsg.Name = "userMsg";
            this.userMsg.Size = new System.Drawing.Size(546, 412);
            this.userMsg.TabIndex = 4;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(984, 662);
            this.Controls.Add(this.userMsg);
            this.Controls.Add(this.txt3);
            this.Controls.Add(this.txt1);
            this.Controls.Add(this.txt2);
            this.Controls.Add(this.port);
            this.Controls.Add(this.add);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.msg);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox msg;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TextBox add;
        private System.Windows.Forms.Label txt2;
        private System.Windows.Forms.Label txt3;
        private System.Windows.Forms.TextBox port;
        private System.Windows.Forms.Label txt1;
        private System.Windows.Forms.TextBox userMsg;
    }
}

