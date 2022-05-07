#include <stdio.h>
#include <iostream>
#include <GL/glut.h>
using namespace std;

int pntX1, pntY1, r;

void plot(int x, int y)
{
	glBegin(GL_POINTS);
	glVertex2i(x + pntX1, y + pntY1);
	glEnd();
}


void myInit(void)
{
	glClearColor(1.0, 0.0, 0.0, 0.0);
	glColor3f(0.0, 0.0, 0.0);
	glPointSize(5.0);
	glMatrixMode(GL_PROJECTION);
	gluOrtho2D(0.0, 640.0, 0.0, 480.0);
}


void midPointCircleAlgo(int a)
{
	if (a == 1)
	{
		pntX1 = 200;
		pntY1 = 200;
		r = 20;
	}
	else
	{
		pntX1 = 200;
		pntY1 = 140;
		r = 40;
	}
	int x = 0;
	int y = r;
	float decision = 5 / 4 - r;
	plot(x, y);

	while (y > x)
	{
		if (decision < 0)
		{
			x++;
			decision += 2 * x + 1;
		}
		else
		{
			y--;
			x++;
			decision += 2 * (x - y) + 1;
		}
		plot(x, y);
		plot(x, -y);
		plot(-x, y);
		plot(-x, -y);
		plot(y, x);
		plot(-y, x);
		plot(y, -x);
		plot(-y, -x);
	}

}
void line()
{
	glColor3f(1.0, 1.0, 1.0);
	glPointSize(5.0);
	int x1 = 150, y1 = 180, x2 = 250, y2 = 180;
	cout << "Enter the starting coordinates:";
	cin >> x1 >> y1;
	cout << "Enter the ending coordinates:";
	cin >> x2 >> y2;
	int step, dx = x2 - x1, dy = y2 - y1;
	if (abs(dx) > abs(dy))
	{
		step = abs(dx);
	}
	else
	{
		step = abs(dy);
	}
	float xInc = (float)dx / (float)step;
	float yInc = (float)dy / (float)step;
	float x = x1, y = y1;
	glBegin(GL_POINTS);
	for (int i = 0; i < step; i++)
	{
		glVertex2i(x, y);
		x += xInc;
		y += yInc;
	}
	glEnd();
	glFlush();
}

void myDisplay(void)
{
	glClear(GL_COLOR_BUFFER_BIT);
	glColor3f(1.0, 1.0, 1.0);
	glPointSize(5.0);

	midPointCircleAlgo(1);
	line();
	midPointCircleAlgo(2);
	glFlush();
}

void main(int argc, char** argv)
{
	cout << "Enter the coordinates of the center:\n\n" << endl;
	cout << "X-coordinate   : "; 
	cin >> pntX1;
	cout << "\nY-coordinate : "; 
	cin >> pntY1;
	cout << "\nEnter radius : "; 
	cin >> r;


	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
	glutInitWindowSize(640, 480);
	glutInitWindowPosition(100, 150);
	glutCreateWindow("stick figure");
	glutDisplayFunc(myDisplay);
	myInit();
	glutMainLoop();

}